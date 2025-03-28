const form = document.getElementById('groupForm');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const names = [
        form.nome1.value,
        form.nome2.value,
        form.nome3.value,
        form.nome4.value,
        form.nome5.value,
    ].filter(name => name.trim() !== ''); 

    const message = form.history.value;

    const payload = {
        names: names,
        message: message,
    };

    try {
        const response = await fetch('https://fsdt-contact.onrender.com/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            const result = await response.json();

            form.nome1.value = '';
            form.nome2.value = '';
            form.nome3.value = '';
            form.nome4.value = '';
            form.nome5.value = '';
            form.history.value = '';

            alert('✅ Formulário enviado com sucesso!');
            console.log('Resposta do servidor:', result);
        } else {
            throw new Error('Erro na resposta do servidor');
        }
    } catch (error) {
        alert('❌ Ocorreu um erro ao enviar os dados. Tente novamente mais tarde.');
        console.error('Erro:', error);
    }
});