import React from 'react';
import Select from '../select';

import left from '../../assets/icons8-backward-32.png';
import right from '../../assets/icons8-forward-31.png';
import leftArrow from '../../assets/less than.png';
import rightArrow from '../../assets/more than.png';

import style from './pagination.module.scss';


const Pagination = ({ setCount, count, totalCount, setPage, page }) => {
  return (
    <>
      <div className={style.pagination}>
        <div className={style.leftFlex}>
          <p className={style.para}>Select Page</p>
          <div style={{ maxWidth: '80px' }}>
            <Select onChange={(e) => setCount(Number(e.target.value))}>
              {selectOptions?.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Select>
          </div>
        </div>
        <div className={style.rightFlex}>
          <p className={style.p}>
            {` Showing ${(page - 1) * count === 0 ? 1 : (page - 1) * count} to ${page * count
              } of ${totalCount}`}{' '}
          </p>
          <img src={left} alt="" onClick={() => setPage((prev) => 1)} />
          <img
            src={leftArrow}
            alt=""
            onClick={() => setPage((prev) => (prev === 1 ? 1 : --prev))}
          />

          {/* {pages()} */}
          {page - 1 === 0 ? '' : page - 1}
          <span>
            <b style={{ color: '#000000', margin: '0px 10px' }}>{page}</b>
          </span>
          {page + 1 > Math.ceil(totalCount / count) ? '' : page + 1}
          <img
            src={rightArrow}
            alt=""
            onClick={() =>
              setPage((prev) =>
                prev === Math.ceil(totalCount / count) ? Math.ceil(totalCount / count) : ++prev,
              )
            }
          />
          <img
            src={right}
            alt=""
            onClick={() => setPage((prev) => Math.ceil(totalCount / count))}
          />
        </div>
      </div>

    </>
  );
};

export default Pagination;

export const selectOptions = [
  {
    value: '10',
    label: '10',
  },
  {
    value: '20',
    label: '20',
  },
  {
    value: '30',
    label: '30',
  },
];
