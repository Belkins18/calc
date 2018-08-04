'use strict';
import polyfills from './libraries/polyfills';

import calculator from '../../components/calculator/calculator';

$(() => {
    polyfills.init();
    // ================ Здесь инициализируем модули =====================
    calculator.init();
});
