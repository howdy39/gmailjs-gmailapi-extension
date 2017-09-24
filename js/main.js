var gmail;

function refresh(f) {
  if( (/in/.test(document.readyState)) || (typeof Gmail === undefined) ) {
    setTimeout('refresh(' + f + ')', 10);
  } else {
    f();
  }
}


var main = function(){
  // NOTE: Always use the latest version of gmail.js from
  // https://github.com/KartikTalwar/gmail.js
  gmail = new Gmail();
  console.log('Hello,', gmail.get.user_email());

  var sfButton = {
    content : 'My Button',
    class : 'btn-MyButton',
    toolbarButton : function (){
      console.log('OnClick');
      var text = {
        id: gmail.get.email_id(),
        email: gmail.get.user_email()
      };
      
      window.postMessage({ type: "FROM_PAGE", text }, "*");
    }
  }

  setInterval(function(){    
    if(!$('[gh="mtb"] .btn-MyButton').length){
      if(gmail.check.is_inside_email()){
        gmail.tools.add_toolbar_button(sfButton.content, sfButton.toolbarButton, sfButton.class);
      }
    }
  }, 500);

  // gmail.observe.on("open_email", function(id, url, body, xhr) {

    // console.log("id:", id, "url:", url, 'body', body, 'xhr', xhr);
    // console.log(gmail.get.email_data(id));

    // console.log('sendMessage！！！');
    // chrome.runtime.sendMessage(
    //   {id: id},
		// 	function(response){
		// 		console.log("message sent");
    // 	});
    // chrome.runtime.sendMessage("めっせぇじ", function (response){
    //   console.log("受け取ったデータ：", response)
    // })

  //   var text = {
  //     id,
  //     email: gmail.get.user_email()
  //   };
    
  //   window.postMessage({ type: "FROM_PAGE", text }, "*");
  // })
}


refresh(main);

