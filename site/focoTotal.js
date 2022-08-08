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

function valid(element) {
  $(element)
    .closest('.divNomeBar')
    .removeClass('error')
    .addClass('success');
}

function notValid(element) {
  $(element)
    .closest('.divNomeBar')
    .removeClass('success')
    .addClass('error');
}

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

  function valid(element) {
    $(element)
      .closest('.divNickNameBar')
      .removeClass('error')
      .addClass('success');
  }
  
  function notValid(element) {
    $(element)
      .closest('.divNickNameBar')
      .removeClass('success')
      .addClass('error');
  }

//Email
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

  function valid(element) {
    $(element)
      .closest('.divEmailBar')
      .removeClass('error')
      .addClass('success');
  }
  
  function notValid(element) {
    $(element)
      .closest('.divEmailBar')
      .removeClass('success')
      .addClass('error');
  }

//Confirmar Email
$('#userCEmail').on('focus change', function() {
  if (! $(this).val() || $(this).val().length === 0) {
    return notValid($(this));
  }
  
  valid($(this));
});

$(document).ready(function(){
  $("#userCEmail").focus(function() {
    $(this).parent().addClass("focoAtual")
  });
  $("#userCEmail").blur(function() {
    $(this).parent().removeClass("focoAtual")
  });
});

function valid(element) {
  $(element)
    .closest('.divCEmailBar')
    .removeClass('error')
    .addClass('success');
}

function notValid(element) {
  $(element)
    .closest('.divCEmailBar')
    .removeClass('success')
    .addClass('error');
}

//Senha
$('#userSenha').on('focus change', function() {
  if (! $(this).val() || $(this).val().length === 0) {
    return notValid($(this));
  }
  
  valid($(this));
});

$(document).ready(function(){
  $("#userSenha").focus(function() {
    $(this).parent().addClass("focoAtual")
  });
  $("#userSenha").blur(function() {
    $(this).parent().removeClass("focoAtual")
  });
});

function valid(element) {
  $(element)
    .closest('.divSenhaBar')
    .removeClass('error')
    .addClass('success');
}

function notValid(element) {
  $(element)
    .closest('.divSenhaBar')
    .removeClass('success')
    .addClass('error');
}

//Confirmar Senha
$('#userCSenha').on('focus change', function() {
  if (! $(this).val() || $(this).val().length === 0) {
    return notValid($(this));
  }
  
  valid($(this));
});

$(document).ready(function(){
  $("#userCSenha").focus(function() {
    $(this).parent().addClass("focoAtual")
  });
  $("#userCSenha").blur(function() {
    $(this).parent().removeClass("focoAtual")
  });
});

function valid(element) {
  $(element)
    .closest('.divCSenhaBar')
    .removeClass('error')
    .addClass('success');
}

function notValid(element) {
  $(element)
    .closest('.divCSenhaBar')
    .removeClass('success')
    .addClass('error');
}

//Mostrar Senha 
let btn = document.querySelector('#olho');

btn.addEventListener('click', function() {
    let input = document.querySelector('#userSenha');

    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }

});

$(document).ready(function(){

    $("#olho").click(function(){
      if($(this).attr("src") == "img/olhos-cruzados.svg")
      $(this).attr("src","img/olho.svg");
      else
        $(this).attr("src","img/olhos-cruzados.svg");
  
    });
  });
  
  let btnEyes2 = document.querySelector('#olho-2');

  btnEyes2.addEventListener('click', function() {
    let input = document.querySelector('#userCSenha');

    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }

});

$(document).ready(function(){

    $("#olho-2").click(function(){
      if($(this).attr("src") == "img/olhos-cruzados.svg")
      $(this).attr("src","img/olho.svg");
      else
        $(this).attr("src","img/olhos-cruzados.svg");
  
    });
  });
