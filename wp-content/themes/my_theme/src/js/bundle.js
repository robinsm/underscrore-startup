import './plugins/retina-1.3.0/retina.js';
import AOS from './plugins/aos/aos.js';

console.log('bundle.js loading');

// animate on scroll init
AOS.init({
	duration: 1000,
	delay: 300,
	once: true,
	//disable: 'mobile'
});
