import './lib/lib';
import $ from './lib/core';

$('#first').on('click', () => {
   $('div').eq(1).fadeOut(800);
});
$('[data-count="second"]').on('click', () => {
   $('div').eq(7).fadeOut(800);
});
$('button').eq(2).on('click', () => {
   $('.w-500').fadeOut(800);
});









