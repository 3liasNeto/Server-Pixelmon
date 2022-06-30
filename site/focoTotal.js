//Nome
$('#userNome').on('focus change', function() {
    if (! $(this).val() || $(this).val().length === 0) {
      return notValid($(this));
    }
    
    valid($(this));
  });

  $(document).ready(function(){
    $("#userNome").focus(function() {
      $(this).parent().addClass("focoAtual")
    });
    $("#userNome").blur(function() {
      $(this).parent().removeClass("focoAtual")
    });
  });

//NickName
$('#userNickName').on('focus change', function() {
    if (! $(this).val() || $(this).val().length === 0) {
      return notValid($(this));
    }
    
    valid($(this));
  });

  $(document).ready(function(){
    $("#userNickName").focus(function() {
      $(this).parent().addClass("focoAtual")
    });
    $("#userNickName").blur(function() {
      $(this).parent().removeClass("focoAtual")
    });
  });
//
$('#userEmail').on('focus change', function() {
    if (! $(this).val() || $(this).val().length === 0) {
      return notValid($(this));
    }
    
    valid($(this));
  });

  $(document).ready(function(){
    $("#userEmail").focus(function() {
      $(this).parent().addClass("focoAtual")
    });
    $("#userEmail").blur(function() {
      $(this).parent().removeClass("focoAtual")
    });
  });

//

//

//

//

