	function register_user(username, phonenumber, password, radioValue){
			
			$.ajax({
						type:"POST",  //Request type
						url: "http://192.168.43.194/spinthewheel/php_scripts/register_user.php",   
						data:{username:username, password:password, phonenumber:phonenumber,radioValue:radioValue},
						cache:false,
						success:function(data) {
							if(data > 0){
								localStorage.setItem("username",login_username);
								localStorage.setItem("user_id", data);
								localStorage.setItem("login_status", true);
								document.querySelector('#my_navigator').pushPage('main_menu_page.html');
						   }else{
							ons.notification.alert('Registration Could Not Be Completed');
						   }
						}
					});


	} 
	function login_user(login_username, login_password){

				$.ajax({
						type:"POST",  //Request type
						url: "http://192.168.43.194/spinthewheel/php_scripts/login_user.php",   
						data:{login_username:login_username, login_password:login_password},
						cache:false,
						success:function(data) {
						   if(data > 0 ){
							localStorage.setItem("username",login_username);
							localStorage.setItem("user_id", data);
							localStorage.setItem("login_status", true);
							document.querySelector('#my_navigator').pushPage('main_menu_page.html');
						   }else{
							ons.notification.alert('Wrong Login Details');
						   }
						}
					});
	}  
	function spinCalculator(user_id){
			var spins_left = 0;
			$.ajax({
						type:"POST",  //Request type
						url: "http://192.168.43.194/spinthewheel/php_scripts/spincalculator.php",   
						data:{user_id:user_id},
						cache:false,
						success:function(data) {
						   ons.notification.alert(data);
						   startSpin();
						}
					});

	}
	function dailySpinAllocator(user_id){
		$.ajax({
						type:"POST",  //Request type
						url: "http://192.168.43.194/spinthewheel/php_scripts/dailySpinAllocator.php",   
						data:{user_id:user_id},
						cache:false,
						success:function(data) {
						 
							ons.notification.alert(data);
						   
						   
						}
					});

	}
function reduceSpinBalance(user_id){
	$.ajax({
						type:"POST",  //Request type
						url: "http://192.168.43.194/spinthewheel/php_scripts/reduceSpinBalance.php",   
						data:{user_id:user_id},
						cache:false,
						success:function(data) {
						 
							ons.notification.alert(data);
						   
						   
						}
					});
}
function updateRewards(user_id, score){
$.ajax({
						type:"POST",  //Request type
						url: "http://192.168.43.194/spinthewheel/php_scripts/updateRewards.php",   
						data:{user_id:user_id,score:score},
						cache:false,
						success:function(data) {
						 
							ons.notification.alert(data);
						   
						   
						}
					});


}	
	