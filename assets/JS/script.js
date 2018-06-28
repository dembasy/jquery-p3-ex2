$('#plus').click(function() {
    $('#number').html(function(i, val) {
      return val*1+1 });
});
$('#minus').click(function() {
    $('#number').html(function(i, val) {
      return val*1-1 });
});
