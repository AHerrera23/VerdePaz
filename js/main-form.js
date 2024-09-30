const btn = document.getElementById("button");
const modal = document.getElementById("modal");
let enviar = false;

const enviarForm = ()=>{
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    btn.value = "Sending...";
    const nombre = document.getElementById("to_name").value;
    const nombreModal = document.getElementById("h3");
    if(enviar===true){
      document.body.style.overflow = 'hidden';
      modal.style.display='flex'
      nombreModal.innerHTML = nombre
    }
    const serviceID = "default_service";
    const templateID = "template_8wksmow";
  
    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "Send Email";
        enviar=true
        //alert('Sent!');
      },
      (err) => {
        btn.value = "Send Email";
        alert(JSON.stringify(err));
      }
    );
  });
  
};
