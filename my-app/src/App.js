import React from "react";

function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
          Ce qui doit être fait?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
        ajouter
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Afficher </span>
          <span>tout</span>
          <span className="visually-hidden"> Tâches</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Afficher </span>
          <span>Active</span>
          <span className="visually-hidden"> Tâches</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Afficher </span>
          <span>Complété</span>
          <span className="visually-hidden"> Tâches</span>
        </button>
      </div>
      <h2 id="list-heading">3 tâches restantes</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-0">
              Manger
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
            Éditer <span className="visually-hidden">Manger</span>
            </button>
            <button type="button" className="btn btn__danger">
             EFFACER <span className="visually-hidden">Manger</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              Dormir
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
            Éditer <span className="visually-hidden">Dormir</span>
            </button>
            <button type="button" className="btn btn__danger">
              Effacer <span className="visually-hidden">Dormir</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
            Répéter
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
            Éditer<span className="visually-hidden">répéter</span>
            </button>
            <button type="button" className="btn btn__danger">
            effacer <span className="visually-hidden">répéter</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default App;
