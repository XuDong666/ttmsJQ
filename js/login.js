/**
 * Created by 许栋 on 2017/9/27.
 */

$("#account").blur((ev)=>{
    const reg=/^[a-zA-Z]\w{4,10}$/g;
    const account=$("#account").val();
    if(!reg.test(account)){
        alert('请输入正确格式');
        $("#account").val('');
    }
})
$("#submit").click((ev)=>{
    ev.preventDefault();
    const account=$("#account").val();
    const password=$("#password").val();
    if(!account && !password){
        alert('请输入完整信息');
    }
    else{
        window.location.href='./studio1.html'
    }
})