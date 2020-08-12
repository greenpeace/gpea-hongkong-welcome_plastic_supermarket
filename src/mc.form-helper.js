/**
 * Collect all the input values inside the form
 * @param  {DOM or string} form Native js Element (not in jquery form)
 * @return {Object} {name:value, ...}
 */
export const fetchFormInputs = (form) => {
	if (typeof form === 'string' || form instanceof String) {
		form = document.querySelector(form)
	}

	let obj = {}
	form.querySelectorAll("input").forEach(function (el, idx) {
		let v = null

		if (el.type==="checkbox") {
			v = el.checked
		} else {
			v = el.value
		}

		obj[el.name] = v
	})
	form.querySelectorAll("select").forEach(function (el, idx) {
		obj[el.name] = el.options[el.selectedIndex].value
	})

	return obj
}

/**
 * Retrieve the form POST URL
 * @return {string} URL
 */
export const getPostURL = () => {
	return document.querySelector("#mc-form").action
}

/**
 * Retrieve the current number of supporters and signup targets
 * @return {object} {numSignup:int, numSignupTarget:int}
 */
export const getNumSignupsAndTarget = () => {
	var numSignupTarget = parseInt(document.querySelector('input[name="numSignupTarget"]').value, 10) || 0,
		numResponses = parseInt(document.querySelector('input[name="numResponses"]').value, 10) || 0

	return {
		numSignupTarget,
		numSignup: numResponses
	}
}

/**
 * Display the full loading screen
 *
 * Remember to add the following style to your page:
 */
/*

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
}
#page-loading.hide {
		opacity: 0;
		transition: opacity 1s;
}

#page-loading .lds-ellipsis {
		display: inline-block;
		position: relative;
		width: 80px;
		height: 80px;
}
#page-loading .lds-ellipsis div {
		position: absolute;
		top: 33px;
		width: 13px;
		height: 13px;
		border-radius: 50%;
		background: #6c0;
		animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
#page-loading .lds-ellipsis div:nth-child(1) {
		left: 8px;
		animation: lds-ellipsis1 0.6s infinite;
}
#page-loading .lds-ellipsis div:nth-child(2) {
		left: 8px;
		animation: lds-ellipsis2 0.6s infinite;
}
#page-loading .lds-ellipsis div:nth-child(3) {
		left: 32px;
		animation: lds-ellipsis2 0.6s infinite;
}
#page-loading .lds-ellipsis div:nth-child(4) {
		left: 56px;
		animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
		0% {transform: scale(0); }
		100% {transform: scale(1); }
}
@keyframes lds-ellipsis3 {
		0% {transform: scale(1); }
		100% {transform: scale(0); }
}
@keyframes lds-ellipsis2 {
		0% {transform: translate(0, 0); }
		100% {transform: translate(24px, 0); }
}
 */
export const showFullPageLoading = () => {
	if ( !document.querySelector("#page-loading")) {
		document.querySelector("body").insertAdjacentHTML('beforeend', `
			<div id="page-loading" class="hide">
				<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
			</div>`);
	}

	setTimeout(() => { // to enable the transition
		document.querySelector("#page-loading").classList.remove("hide")
	}, 0)
}

/**
 * Hide the full page loading
 */
export const hideFullPageLoading = () => {
	document.querySelector("#page-loading").classList.add("hide")

	setTimeout(() => {
		document.querySelector("#page-loading").remove()
	}, 1100)
}

/**
 * Send the tracking event to the ga
 * @param  {string} eventLabel The ga trakcing name, normally it will be the short campaign name. ex 2019-plastic_retailer
 * @param  {[type]} eventValue Could be empty
 * @return {[type]}            [description]
 */
export const sendPetitionTracking = (eventLabel, eventValue) => {
	window.dataLayer = window.dataLayer || [];

	window.dataLayer.push({
			'event': 'gaEvent',
			'eventCategory': 'petitions',
			'eventAction': 'signup',
			'eventLabel': eventLabel,
			'eventValue' : eventValue
	});

	window.dataLayer.push({
			'event': 'fbqEvent',
			'contentName': eventLabel,
			'contentCategory': 'Petition Signup'
	});
}

/**
 * We provide two helper class to quickly switch the block show/hide
 * in the dd page: `is-hidden-at-dd-page-only`, `is-shown-at-dd-page-only`
 *
 * This function use the current url to distinguish the dd page.
 * The dd page should have url like this: xxx?utm_source=dd
 */
(() => {
	if (window.location.href.indexOf("utm_source=dd")>=0) {
		let style = document.createElement('style');
		style.innerHTML =
			`.is-hidden-at-dd-page-only {
				display: none !important;
			}
			.is-shown-at-dd-page-only {
				display: block !important;
			}`
		;
		document.head.appendChild(style);
	} else { // not in the dd page
		let style = document.createElement('style');
		style.innerHTML =
			`
			.is-shown-at-dd-page-only {
				display: none !important;
			}`
		;
		document.head.appendChild(style);
	}
})()