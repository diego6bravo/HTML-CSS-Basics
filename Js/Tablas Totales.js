$(document).ready(function() {

    jQuery.fn.dataTable.Api.register( 'sum()', function ( ) {
        return this.flatten().reduce( function ( a, b ) {
          if ( typeof a === 'string' ) {
            a = a.replace(/[^\d.-]/g, '') * 1;
          }
          if ( typeof b === 'string' ) {
            b = b.replace(/[^\d.-]/g, '') * 1;
          }

          return a + b;
        }, 0 );
    });

    jQuery.fn.dataTable.Api.register('sum()', function () {
        return this.flatten().reduce(function (a, b) {
            if (typeof a === 'string') {
                a = a.replace(/[^\d.-]/g, '') * 1;
            }
            if (typeof b === 'string') {
                b = b.replace(/[^\d.-]/g, '') * 1;
            }
            return a + b;
        }, 0);
    });

    function formatNumber(num, isDollars) {
        if (num && isDollars) {
            return `$${num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`;
        }

        return ` ${num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`;
        // return num;
    }

    $(".tablatotales").DataTable({

        "responsive": {  
                    details: false
    }, 

    "autoWidth": true,

    "lengthMenu": [[5, 10, 20, -1], [5, 10, 20, "All"]],

    "language": {

        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "NingÃºn dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de _TOTAL_",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "Cargando...",
        "oPaginate": {
        "sFirst":    "Primero",
        "sLast":     "Ãšltimo",
        "sNext":     "Siguiente",
        "sPrevious": "Anterior"
        },
        "oAria": {
            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
        }

    },



        footerCallback: function () {
            const api = this.api();
            const columns = [
                {
                    index: 3,
                    dollars: false,
                },
/*                {
                    index: 5,
                    dollars: true,
                },*/
            ];
            let i = 0;

            for (const len = columns.length; i < len; i++) {

                const column = columns[i];

                $('tfoot th')
                    .eq(column.index)
                    .html(
                        'Total:&emsp;' +
                        formatNumber(
                            api
                                .column(column.index, {
                                    filter: 'applied',
                                })
                                .data()
                                .sum(),
                            column.dollars
                        )
                    );

                $('tfoot th')
                    .eq(column.index)
                    .append(
                        '<br>Pagina:&emsp;' +
                        formatNumber(
                            api
                                .column(column.index, {
                                    filter: 'applied',
                                    page: 'current',
                                })
                                .data()
                                .sum(),
                            column.dollars
                        )
                    );
            }
        },
    });
        
});












