document.getElementById('calculateButton').addEventListener('click', function() {
    // Obtém os valores dos campos de entrada
    const salary = parseFloat(document.getElementById('salary').value);
    const discountPercentage = parseFloat(document.getElementById('discount').value);
    
    if (!isNaN(salary) && !isNaN(discountPercentage)) {
        // Calcula o valor do desconto e o salário líquido
        const discountAmount = salary * (discountPercentage / 100);
        const netSalary = salary - discountAmount;
        
        // Atualiza o texto do resultado
        document.getElementById('result').textContent = `Salário Líquido: R$ ${netSalary.toFixed(2)}`;
    } else {
        // Se algum dos campos estiver vazio ou inválido
        document.getElementById('result').textContent = 'Por favor, preencha todos os campos corretamente.';
    }
});