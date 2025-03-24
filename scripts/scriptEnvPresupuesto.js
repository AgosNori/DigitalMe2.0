
// document
//   .querySelector(".btnPresupuesto")
//   .addEventListener("click", function (event) {
//     event.preventDefault(); // Evita el envío por defecto del formulario

//     const elemento = document.getElementById("presupuesto");
//     html2pdf()
//       .from(elemento)
//       .toPdf()
//       .get("pdf")
//       .then((pdf) => {
//         const blob = pdf.output("blob");
//         const formData = new FormData();
//         formData.append("file", blob, "presupuesto.pdf");
//         console.log("se creo el form para enviar");
//         // Ahora podemos usar formData en el envio del correo
       
//         const emailsParam={
//             to_name:"Destinatario",
//             to_email:"digitalme.ssdigitales@gmail.com",
//             message:"Tienes un nuevo presupuesto generado!",
//             file:formData.get("file")
//         }
       
//         emailjs
//           .send(
//             "service_fbehjlb",
//             "template_gzcf66t",
//             emailsParam,
//             "v8rb-IIgLGG3YPR0H"
//           )
//           .then((response) => {
//             console.log("SUCCESS!", response.status, response.text);
//             Swal.fire({
//               title: "¡Éxito!",
//               text: "Suscripción realizada correctamente.",
//               icon: "success",
//               confirmButtonText: "Aceptar",
//             });
//           })
//           .catch((error) => {
//             console.error("Error:", error);
//             Swal.fire({
//               title: "Error",
//               text: "Hubo un error al enviar la solicitud de suscripción.",
//               icon: "error",
//               confirmButtonText: "Aceptar",
//             });
//           });
//       });
//   });
// ya 
document.querySelector(".btnPresupuesto").addEventListener("click", function () {
    const elemento = document.getElementById("presupuesto");
  
    html2pdf()
      .from(elemento)
      .toPdf()
      .output("datauristring") // Genera el PDF en formato Base64
      .then((pdfBase64) => {
        // Parámetros para enviar el correo con EmailJS
        const emailParams = {
          to_name: "Destinatario",
          to_email: "destinatario@example.com",
          message: "Aquí tienes el presupuesto adjunto.",
          file: pdfBase64, // Archivo en Base64
        };
  
        emailjs
          .send("service_fbehjlb", "template_gzcf66t", emailParams, "v8rb-IIgLGG3YPR0H")
          .then((response) => {
            console.log("Correo enviado con éxito", response.status, response.text);
            Swal.fire({
              title: "¡Éxito!",
              text: "El presupuesto fue enviado correctamente.",
              icon: "success",
              confirmButtonText: "Aceptar",
            });
          })
          .catch((error) => {
            console.error("Error al enviar el correo:", error);
            Swal.fire({
              title: "Error",
              text: "Hubo un problema al enviar el presupuesto.",
              icon: "error",
              confirmButtonText: "Aceptar",
            });
          });
      });
  });
  