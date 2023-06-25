/* в этот файл добавляет скрипты*/
import { makeMap } from './leaflet2.js';
import {connectSwiper} from './swiper.js';
import {connectRangeSlider} from './range-slider.js';
import { makeMenu } from './script-nav.js';


makeMap();
connectSwiper();
connectRangeSlider();
makeMenu();
