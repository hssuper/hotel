var hotel = {
    totalQuartos: 100,
    reservados: 30,

    disponibilidade: function () {
        return this.totalQuartos - this.reservados;
    },
    Reservados: function () {
        return reservados--;
    }
}
var quartos = document.getElementById('totalQuartos');
quartos.textContent = hotel.totalQuartos;

var reserva = document.getElementById('reservados');
reserva.textContent = hotel.reservados;



var nomeDia = document.getElementById(['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado']);
nomeDia.textContent = d.nomeDia;

var nomeMes = document.getElementById(['janeiro', 'fevereiro', 'março', 'abrio', 'maio', 'junho', 'julho',
    'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']);
nomeMes.textContent = d.nomeMes;


