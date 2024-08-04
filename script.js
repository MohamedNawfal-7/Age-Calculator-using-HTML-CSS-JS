document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
    
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    
    document.getElementById('result').innerText =`Your age is ${age} years.`;
});