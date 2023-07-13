import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './SideBar.module.css';
import { FiX } from 'react-icons/fi';
import Dropdown from 'components/Test/Dropdown';

const SideBar = ({ closeModal }) => {
  return (
    <div className={s.sideBarBox} id="main">
      <button onClick={closeModal} className={s.closeBtn}>
        <FiX />
      </button>
      <ul className={s.listSideBar}>
        <Dropdown
          heroText={'Головна сторінка'}
          secondaryText={['Aкції', 'Замовлення', 'Умови доставки']}
        />
        <Dropdown
          heroText={'Харчування'}
          secondaryText={[
            [
              'Коти',
              [
                [
                  'Сухе',
                  [
                    'Royal Canin',
                    'OptiMeal',
                    'Brit Care',
                    'Carnilove',
                    'Клуб 4 Лапи',
                    'Мяу',
                    'EuroCat',
                    'HappyCat',
                    'Brit Premium',
                  ],
                ],
                [
                  'Вологе',
                  [
                    'Royal Canin',
                    'OptiMeal',
                    'Brit Care',
                    'Carnilove',
                    'Клуб 4 Лапи',
                    'Мяу',
                    'EuroCat',
                    'HappyCat',
                    'Brit Premium',
                  ],
                ],
              ],
            ],
            [
              'Собаки',
              [
                ['Сухе', ['Royal Canin', 'Alice', 'EuroDog', 'HappyDog']],
                ['Вологе', ['HappyDog']],
              ],
            ],
            [
              'Гризуни',
              [['Природа', ['Гранулят', 'Коктейль', 'Фієста']], 'Nature'],
            ],
            ['Птахи', [['Природа', ['Коктейль', 'Фієста']], 'Nature']],
            'Рептилії',
          ]}
        />
        <Dropdown
          heroText={'Ласощі'}
          secondaryText={['Для котів', ['Для собак', ['Trixie']]]}
        />
        <Dropdown
          heroText={'Амуніція'}
          secondaryText={['Нашийники', 'Шлеї', 'Повідки', 'Комплекти']}
        />
        <Dropdown
          heroText={'Комфорт'}
          secondaryText={['Лежанки', 'Кігтеточки', 'Іграшки']}
        />
        <Dropdown
          heroText={'Гігієна'}
          secondaryText={['Туалети', 'Ротова порожнина', 'Труси']}
        />
        <Dropdown
          heroText={`Здоров'я`}
          secondaryText={[
            [
              'Обробка від паразитів',
              [
                ['Для собак', ['Нашийники', 'Краплі', 'Таблетки']],
                ['Для котів', ['Нашийники', 'Краплі', 'Таблетки']],
                'Для кролів',
              ],
            ],
            'Контрацепція',
            'Вакцини',
            ['Вітаміни', ['8 in 1']],
            [
              'Лікувальні корма',
              [
                ['Коти', ['Royal Canin']],
                ['Собаки', ['Brit GF']],
              ],
            ],
            'Післяопераційне',
          ]}
        />
        <li>
          <NavLink className={s.link} to={'/'}>
            Намордники
          </NavLink>
        </li>
        <Dropdown
          heroText={'Грумінг'}
          secondaryText={[
            'Рукавиці',
            'Розчіски',
            'Шампуні',
            'Кондиціонери',
            'Маски',
            'Ножиці',
          ]}
        />

        <li>
          <NavLink className={s.link} to={'/'}>
            Адресники
          </NavLink>
        </li>
        <Dropdown
          heroText={`Акваріумістика`}
          secondaryText={[
            'Акваріумні рибки',
            'Ставкові рибки',
            ['Корм для акваріумних', ['Природа', 'Tetra']],
            'Корм для ставкових',
            'Акваріуми',
            'Терраріуми',
            'Декор',
            'Лампи',
          ]}
        />
      </ul>
    </div>
  );
};

export default SideBar;
