https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js;

$('#GetFile').on('click', function () {
    $.ajax({
        url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/172905/test.pdf',
        method: 'GET',
        xhrFields: {
            responseType: 'blob'
        },
        success: function (data) {
            var b = document.createElement('a');
            var url = window.URL.createObjectURL(data);
            b.href = url;
            b.download = 'myfile.pdf';
            document.body.append(b);
            b.click();
            b.remove();
            window.URL.revokeObjectURL(url);
        }
    });
});