function showInput() {
    document.getElementById("reminder-input").style.display = "block";
  }

  function closeInput() {
    document.getElementById("reminder-input").style.display = "none";
}
  
  function addReminder() {
    const reminderText = document.getElementById("reminder-text").value;
    // Salve o lembrete em seu banco de dados ou aplicativo
    // Exiba o lembrete na tela de alguma forma
    const reminderDisplay = document.getElementById("reminder-display");
    const newReminder = document.createElement('div');
    newReminder.textContent = reminderText;


    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    

    

    // Criar o texto do lembrete
   const reminderTextNode = document.createTextNode(reminderText);

    // Criar um elemento para conter a checkbox e o texto do lembrete
   const reminderItem = document.createElement("div");

    // Adicionar a checkbox e o texto do lembrete ao elemento do lembrete
    reminderItem.appendChild(checkbox);
    reminderItem.appendChild(reminderTextNode);

    checkbox.addEventListener("click", function() {
      if (checkbox.checked) {
          reminderItem.classList.add("strikethrough");
      }else {
        reminderItem.classList.remove("strikethrough");
      }
  });

    // Adicionar o elemento do lembrete à área de exibição de lembretes
    document.getElementById("reminder-display").appendChild(reminderItem);

    // Limpar o campo de texto após adicionar o lembrete
    document.getElementById("reminder-text").value = "";

    
    document.getElementById("reminder-input").style.display = "none";
  }

