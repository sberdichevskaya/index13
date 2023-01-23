class Wroker {
    #name;
    #surname;
    #rate; // ставка за день
    #days; // количество отработанных дней

  constructor (name, surname)
  {
    this.#name = name;
    this.#surname = surname;
    this.#rate = 500; // ставка за день
    this.#days = 21; // количество отработанных дней
  }

  get name()
  {
    return console.log(`Имя рабоника ${this.#name}`);
  }
  get surname()
  {
    return console.log(`Фамилия рабоника ${this.#surname}`);
  }
  get rate()
  {
    return console.log(`Ставка рабоника за день ${this.#rate}`);
  }

  set rate(value)
  {
    if(value>0)
    {
        this.#rate = value;
    }
  }

  get days()
  {

    return console.log(`Количество отработанных дней сотрудником ${this.#days}`);
  }

  set days(value)
  {
    if(value>0)
    {
        this.#days = value;
    }
  }
  
  getSalary()
  {
    let salary;
    salary = this.#rate * this.#days;
    console.log(`${this.#name} ${this.#surname}` + ' получает зарплату в размере ' + salary + ' рублей')
  }
    
  };

  let name1 = 'Александра';
  let surname1 = 'Бердичевская';
  //let rate1 = 500;
  //let days1 = 0;
  

  let name2 = 'Дарья';
  let surname2 = 'Перемитина';
  //let rate2 = 300;
  //let days2 = 10;

  let Wroker1 = new Wroker(name1, surname1);
  Wroker1.getSalary();

  let Wroker2 = new Wroker(name2, surname2);
  Wroker2.getSalary();
