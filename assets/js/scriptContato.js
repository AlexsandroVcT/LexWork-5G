const submitContact = () => {
    const contactForm = document.querySelector("#form-contact");
    let contactData = []
    contactData.push({
        name: contactForm.name.value,
        email: contactForm.email.value,
        tel: contactForm.tel.value,
    })
        alert("Seus dados foram recebidos com sucesso!")

    localStorage.setItem("Entre em Contato", JSON.stringify(contactData))
}
