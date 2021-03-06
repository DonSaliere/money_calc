import React from 'react';
import './App.css';
import './style.css';
import './normalize.css';

function App() {
  return (
    <div>
      <header>
        <h1>Кошелек</h1>
        <h2>Калькулятор расходов</h2>
      </header>
      <main>
        <div class="container">
          <section class="total">
            <header class="total__header">
              <h3>Баланс</h3>
              <p class="total__balance">0 ₽</p>
            </header>
            <div class="total__main">
              <div class="total__main-item total__income">
                <h4>Доходы</h4>
                <p class="total__money total__money-income">
                  +0 ₽
                        </p>
              </div>
              <div class="total__main-item total__expenses">
                <h4>Расходы</h4>
                <p class="total__money total__money-expenses">
                  -0 ₽
                        </p>
              </div>
            </div>
          </section>

          <section class="history">
            <h3>История расходов</h3>
            <ul class="history__list">
              <li class="history__item history__item-plus">Получил зарплату
                        <span class="history__money">+30000 ₽</span>
                <button class="history__delete">x</button>
              </li>

              <li class="history__item  history__item-minus">Отдал долг
                        <span class="history__money">-10000 ₽</span>
                <button class="history__delete">x</button>
              </li>
            </ul>
          </section>
          <section class="operation">
            <h3>Новая операция</h3>
            <form id="form">
              <label>
                <input type="text" class="operation__fields operation__name" placeholder="Наименование операции"></input>
              </label>
              <label>
                <input type="number" class="operation__fields operation__amount" placeholder="Введите сумму"></input>
              </label>
              <div class="operation__btns">
                <button type="submit" class="operation__btn operation__btn-subtract">РАСХОД</button>
                <button type="submit" class="operation__btn operation__btn-add">ДОХОД</button>
              </div>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
