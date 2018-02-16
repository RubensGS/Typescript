import { NegociacaoController } from './controllers/NegociacaoController';
const controller = new NegociacaoController();

//JavaScript Vanilla
// document.querySelector('.form').addEventListener('submit', controller.adiciona.bind(controller));

//Jquery
$('.form').on('submit', controller.adiciona.bind(controller));
$('#botao-importa').click(controller.importaDados.bind(controller));
