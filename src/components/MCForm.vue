<template>
	<div>
		<ValidationObserver v-slot="{ invalid,handleSubmit }">
			<form @submit.prevent="handleSubmit(_onSubmit)">
				<div class="form-row">
					<ValidationProvider rules="required|email" v-slot="{ classes, errors }">
						<label for class="form-label">電郵地址 Email Address</label>
						<input
							:class="['form-input', classes]"
							name="Email"
							v-model="Email"
							type="text"
							placeholder="電郵地址 Email Address"
						/>
						<span class="en__field__error" v-if="errors.length">{{ errors[0] }}</span>
						<span class="email-suggestion" v-if="emailSuggestion" @click="replaceEmailWithSuggestion">您想輸入的是 <strong>{{emailSuggestion}}</strong> 嗎？</span>
					</ValidationProvider>
				</div>

				<div class="form-row">
					<div class="flex flex-wrap">
						<div class="w-full mb-4 md:mb-0 md:w-1/2 md:pr-1">
							<ValidationProvider rules="required" v-slot="{ classes, errors }">
								<label class="form-label">姓氏 Last Name</label>
								<input
									:class="['form-input', classes]"
									name="LastName"
									v-model="LastName"
									type="text"
									placeholder="姓氏 Last Name"
								/>
								<span class="en__field__error" v-if="errors.length">{{ errors[0] }}</span>
							</ValidationProvider>
						</div>

						<div class="w-full md:w-1/2 md:pl-2">
							<ValidationProvider rules="required" v-slot="{ classes, errors }">
								<label class="form-label">名字 First Name</label>
								<input
									:class="['form-input', classes]"
									name="FirstName"
									v-model="FirstName"
									type="text"
									placeholder="名字 First Name"
								/>
								<span class="en__field__error" v-if="errors.length">{{ errors[0] }}</span>
							</ValidationProvider>
						</div>
					</div>
				</div>

				<div class="form-row">
					<div class="flex flex-wrap">
						<label class="form-label">手提號碼 Phone Number</label>


							<div class="w-16 mb-4 md:mb-0 pr-1">
								<ValidationProvider rules="required" name="ccode" vid="ccode" v-slot="{ classes, errors }">
									<select name="MobileCountryCode" v-model="MobileCountryCode" :class="['form-input', classes]">
										<option value="852">+852</option>
										<option value="853">+853</option>
										<option value="886">+886</option>
										<option value="86">+86</option>
									</select>
									<span class="en__field__error" v-if="errors.length">{{ errors[0] }}</span>
								</ValidationProvider>
							</div>

							<div class="flex-1 pl-2">
								<ValidationProvider rules="required|phone-number:@ccode" v-slot="{ classes, errors }">
									<input
										name="MobilePhone"
										v-model="MobilePhone"
										:class="['form-input', classes]"
										type="text"
										placeholder="手提號碼 Mobile Number"
									/>
									<span class="en__field__error" v-if="errors.length">{{ errors[0] }}</span>
								</ValidationProvider>
							</div>

					</div>

				</div>
				<div class="form-row">
					<ValidationProvider rules="required" v-slot="{ classes, errors }">
						<label class="form-label">出生年份</label>
						<div class="relative">
							<select name="Birthdate" v-model="Birthdate" :class="['form-input', classes]">
								<option value="" disabled="">出生年份</option>
								<option
									v-for="year in years"
									v-bind:value="year+'-01-01'"
									v-bind:key="year">
									 {{ year }}
								</option>
							</select>
						</div>
						<span class="en__field__error" v-if="errors.length">{{ errors[0] }}</span>
					</ValidationProvider>
				</div>
				<div class="form-row py-2">
					<ValidationProvider rules="required" v-slot="{ classes, errors }">
						<label class="flex">
							<div
								class="checkbox bg-white border border-gray-300 w-4 h-4 mt-1 flex flex-shrink-0 justify-center items-center"
							>
								<input
									class="hidden"
									checked
									type="checkbox"
									v-model="OptIn"/>
								<svg
									class="tick fill-current hidden w-2 h-2 text-gpgreen pointer-events-none"
									viewBox="0 0 20 20"
								>
									<path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
								</svg>
							</div>
							<span class="form-label flex-1">
								<span class="block text-xs text-gray-500">
									我願意收到綠色和平發送的通訊，讓我能掌握環保工作的最新脈動！我同意綠色和平按照
									<u>個人資料政策</u>與我聯絡，包括提供環保工作資訊及捐款呼籲等。
								</span>
							</span>
						</label>
						<span class="en__field__error" v-if="errors.length">{{ errors[0] }}</span>
					</ValidationProvider>
				</div>
				<div class="form-row">
					<button class="form-button">立即聯署</button>
				</div>

			</form>
		</ValidationObserver>
	</div>

</template>

<script>
	import { ValidationProvider, ValidationObserver, extend, configure } from 'vee-validate';
	import { required, email } from 'vee-validate/dist/rules';
	import Mailcheck from "mailcheck";

	// definitions
	let phoneRules = {
		"852": {
			"country":"+852",
			"code":"+852",
			"pattern":"^[2,3,5,6,8,9]{1}[0-9]{7}$",
			"help":"Mobile number should be 8 digits and start with 2, 3, 5, 6, 8 or 9",
			"maxlength":8

		},
		"853": {
			"country":"+853",
			"code":"+853",
			"pattern":"^[6]{1}[0-9]{7}$",
			"maxlength":8

		},
		"886": {
			"country":"+886",
			"code":"+886",
			"pattern":"^0?[9]{1}[0-9]{8}$",
			"maxlength":9

		},
		"86": {
			"country":"+86",
			"code":"+86",
			"pattern":"^[1]{1}[0-9]{10}$",
			"maxlength":11

		}
	}

	extend('email', {
		...email,
		message: '請填上有效電郵地址'
	});

	extend('required', {
		...required,
		message: '請填入以上資料'
	});

	extend('phone-number', {
		params: ['target'],
		validate(value, { target }) {
			if (target in phoneRules) {
				return (new RegExp(phoneRules[target].pattern)).test(value)
			}

			return true;
		},
		message: '請填上有效手提號碼'
	});

	// for email correctness
	let domains = [
		"me.com",
		"outlook.com",
		"netvigator.com",
		"cloud.com",
		"live.hk",
		"msn.com",
		"gmail.com",
		"hotmail.com",
		"ymail.com",
		"yahoo.com",
		"yahoo.com.tw",
		"yahoo.com.hk"
	];
	let topLevelDomains = ["com", "net", "org"];


	const selectableYears = []
	const nowYear = new Date().getFullYear()
	for (var i=nowYear; i>nowYear-100; i--) {
		selectableYears.push(i)
	}

	export default {
		components: {
			ValidationProvider,
			ValidationObserver
		},
		data: () => ({
			Birthdate: "",
			Email: "",
			FirstName: "",
			LastName: "",
			MobilePhone: "",
			OptIn: true,
			MobileCountryCode: "852",
			years: selectableYears,
			emailSuggestion: null
		}),
		watch: {
			Email: function (v) {
				Mailcheck.run({
					email: v,
					domains: domains, // optional
					topLevelDomains: topLevelDomains, // optional
					suggested: (suggestion) => {
						this.emailSuggestion = suggestion.full
					},
					empty: () => {
						this.emailSuggestion = null
					}
				});

			},
		},
		methods: {
			replaceEmailWithSuggestion () {
				this.Email = this.emailSuggestion
			},
			_onSubmit ()  {
				this.$emit('onSubmit', this.$data);
			}
		}
	}
</script>

<style lang="scss">
	.flex {display: flex;}
	.flex-1 {flex: 1 1 0%;}

	.email-suggestion {
		font-size: 10px;
		color: #F9AA62;
		display: block;
		cursor: pointer;
		margin-left: 0.5rem;
	}
</style>
