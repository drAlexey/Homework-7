const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };



// // ФУНКЦІЯ 1
// // Створіть функцію getMyTaxes.call(country, salary) -> number; –
// // яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн.
// // Функція повинна викликатись через call та працювати з даними через this.

function getMyTaxes(mySalary,country) {
    return (mySalary * this.tax).toFixed(2);
}
console.log(getMyTaxes.call(ukraine,100000));

// // ФУНКЦІЯ 2
// // Створіть функцію getMiddleTaxes.call(country) -> number; –
// // яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary).
// // Функція повинна викликатись через call та працювати з даними через this.

function getMiddleTaxes(country){
    return (this.middleSalary * this.tax).toFixed(2);
}
console.log(getMiddleTaxes.call(ukraine)); 


// // ФУНКЦІЯ 3
// // Створіть функцію getTotalTaxes.call(country) -> number; –
// // яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax middleSalary vacancies).
// // Функція повинна викликатись через call та працювати з даними через this.

function getTotalTaxes(country){
    return (this.middleSalary * this.tax * this.vacancies).toFixed(2);
}
console.log(getTotalTaxes.call(ukraine)); 


// ФУНКЦІЯ 4
// Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду:
// { salary: number, taxes: number, profit: number } кожні 10 секунд.
// Значення salary – генеруйте випадковим чином у діапазоні 1500-2000.
// taxes – розраховується в залежності від вибраної країни та значення salary.
// profit = salary - taxes;

function getMySalary(country) {

    function getRandomSalary(min, max) {
        let rand = min + Math.random() * (max + 1 - min); // Функция генерирует зарплату
            return Math.floor(rand);
    }    
    let salary = (getRandomSalary(1500,2000));
    
                function getMyNewTaxes(salary,country) {
                    return (salary * this.tax).toFixed(2);  // Функция расчитывает налог
                }
                let taxes = getMyNewTaxes.call(country,salary);
            
                        function getProfit (salary,tax) {  // Функция расчитывает доход
                            return (salary - taxes);
                        }    
                        let profit = getProfit(salary,taxes).toFixed(2);
                        
                            let result = {salary:salary,taxes:taxes,profit:profit}     
    console.log(result);       
}              
setInterval(() => getMySalary(ukraine),10000)




