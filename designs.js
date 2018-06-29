// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$(document).ready(function () {
    var $color_picker = $('#colorPicker');
    var $pixel_canvas = $('#pixelCanvas');
    var $size_picker_form = $('#sizePicker');
    var canvas_size = { height: 0, width: 0};
    var color = '#000000';

    $color_picker.on('change', function (e) {
        color = $(this).val();
    });

    $size_picker_form.on('submit', function (e) {
        // Prevent default action (reloading page) when Submit input is clicked
        e.preventDefault();
        var data_array = $(this).serializeArray();
        data_array.forEach((element) => {
            canvas_size[element.name] = element.value;
        });
        makeGrid();
    });

    function makeGrid() {
        // Your code goes here!
        $pixel_canvas.empty();
        var tr, td;
        for(var row = 0; row < canvas_size.height; row++) {
            tr = document.createElement('tr');
            for(var col = 0; col < canvas_size.width; col++) {
                td = document.createElement('td');
                td.addEventListener('click', function (e) {
                    $(this).css({
                        'background-color': color
                    });
                });
                tr.appendChild(td);
            }
            $pixel_canvas.append(tr);
        }
    }
});