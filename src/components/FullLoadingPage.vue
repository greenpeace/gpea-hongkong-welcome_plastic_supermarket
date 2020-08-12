<template>
	<div id="page-loading" v-if="isShown" :class="{hide: !isActive}" >
		<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
	</div>
</template>

<script>
	let timeoutHandler = null

	export default {
		props: ["isActive"],
		data: () => ({
			isShown: false
		}),
		watch: {
			isActive: {
				immediate: true,
				handler (val, oldVal) {
					clearTimeout(timeoutHandler)

					if (val) {
						this.isShown = true
					} else {
						setTimeout( () => {
							this.isShown = false
						}, 1100);
					}
				}
			}
		}
	}
</script>

<style lang="scss">
@keyframes "lds-ellipsis1" {
	0% {
		transform: scale(0);
	}
	100% {
		transform: scale(1);
	}
}
@keyframes "lds-ellipsis3" {
	0% {
		transform: scale(1);
	}
	100% {
		transform: scale(0);
	}
}
@keyframes "lds-ellipsis2" {
	0% {
		transform: translate(0, 0);
	}
	100% {
		transform: translate(24px, 0);
	}
}
#page-loading {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0,0,0,0.8);
	z-index: 10001;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 1;
	transition: opacity 1s;
	.lds-ellipsis {
		display: inline-block;
		position: relative;
		width: 80px;
		height: 80px;
		div {
			position: absolute;
			top: 33px;
			width: 13px;
			height: 13px;
			border-radius: 50%;
			background: #6c0;
			animation-timing-function: cubic-bezier(0, 1, 1, 0);
			&:nth-child(1) {
				left: 8px;
				animation: lds-ellipsis1 0.6s infinite;
			}
			&:nth-child(2) {
				left: 8px;
				animation: lds-ellipsis2 0.6s infinite;
			}
			&:nth-child(3) {
				left: 32px;
				animation: lds-ellipsis2 0.6s infinite;
			}
			&:nth-child(4) {
				left: 56px;
				animation: lds-ellipsis3 0.6s infinite;
			}
		}
	}
}

#page-loading.hide {
	opacity: 0;
	transition: opacity 1s;
}

</style>