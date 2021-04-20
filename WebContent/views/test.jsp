<!doctype html>
<html lang="ko">
<head>
<script type="text/javascript" src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js" charset="utf-8"></script>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<script type="text/javascript">
	var naver_id_login = new naver_id_login("e1KwXNIuObvulqlt0B_d", "http://localhost:8080/api/auth/naverLogin");
	// 접근 토큰 값 출력
	alert(naver_id_login.oauthParams.access_token);
	// 네이버 사용자 프로필 조회
	naver_id_login.get_naver_userprofile("naverSignInCallback()");
	// 네이버 사용자 프로필 조회 이후 프로필 정보를 처리할 callback function
	function naverSignInCallback() {

		console.log("####");
		window.opener.href = "localhost:3000";
		$.ajax({
	         url: "/api/auth/naverLoginSuccess",
	         method: "POST",
	         data: {
			     	"email":naver_id_login.getProfileData('email')
				 ,	"username":naver_id_login.getProfileData('nickname') 
			 },
	         success: function(data) {
	             console.log(data);
	         }
	     });
	}
</script>

</head>
<body>
</body>
</html>