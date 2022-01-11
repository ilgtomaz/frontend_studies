import React, { Component } from "react";
import { FaTimes } from "react-icons/fa";
import Type from "../Type";
import "./style.css";

class Modal extends Component {
  render() {
    const { isShow, modalRef, changeModalStatus, card } = this.props;
    const usedClassName = isShow ? "show" : "";
    const id = card?.id || '';
    const name = card?.name || '';
    return (
      <div ref={modalRef} className={`${usedClassName} modal`}>
        <div className="modal__content">
          <header className="modal__content__header">
            <p className="modal__content__title">Pokémon Description</p>
            <FaTimes
              className="modal__content__header__exit"
              onClick={changeModalStatus}
            />
          </header>
          <section className="modal__content__main">
            <form>
              <div className="modal__content__main__group">
                <div className="modal__content__main__group__input">
                  <label>id</label>
                  <input type="text" value={`#${id}`} disabled/>
                </div>
                <div className="modal__content__main__group__input">
                  <label>name</label>
                  <input type="text" value={name} disabled/>
                </div>
              </div>
            </form>
            <div className="modal__content__main__group__type">
              <p>Types</p>
              <div className="modal__content__main__group__type__content">
                {card?.types?.map((type, index) => (
                  <Type name={type.name} usedAlt={type.usedAlt} key={index} />
                ))}
              </div>
            </div>
            <table className="modal__content__main__group__ability">
              <thead>
                <tr>
                  <td colSpan={2}>Abilities</td>
                </tr>
                <tr>
                  <td>Normal</td>
                  <td>Hidden</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{card?.ability?.normal}</td>
                  <td>{card?.ability?.hidden}</td>
                </tr>
              </tbody>
            </table>
            <table className="modal__content__main__group__stat">
              <thead>
                <tr>
                  <td colSpan={2}>Stats</td>
                </tr>
              </thead>
              <tbody>
                {card?.stats?.map((stat, index) => {
                  return (
                    <tr key={index}>
                      <td>{stat.name}</td>
                      <td>{stat.base}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    );
  }
}

export default Modal;
