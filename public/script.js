
function refresh(){
    $('#list').empty();
    $.get('/todos',function(data){
            for(let todo of data){
                $('#list').append(`<li>${todo}</li>`)
            }
    })
}
refresh();

$('#btn').click(function(){
    // console.log("wsjhqb");
    const todo=$('#inp').val();
    $.post('/todos',{todo},function(res){
        $('#inp').val("");
        refresh();
    });
})