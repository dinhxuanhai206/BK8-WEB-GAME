import { useEffect, useState } from "react"
import classNames from "classnames/bind"
import styles from "./MenuRanking.module.scss"
import Tippy from '@tippyjs/react/headless'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import images from "~/constants/images"
import 'tippy.js/dist/tippy.css'
import Select from 'react-select'

const cx = classNames.bind(styles)

const defaultFn = () => { }

const optionsMonth = [
    { value: 0, label: 'January' },
    { value: 1, label: 'February' },
    { value: 2, label: 'March' },
    { value: 3, label: 'April' },
    { value: 4, label: 'May' },
    { value: 5, label: 'June' },
    { value: 6, label: 'July' },
    { value: 7, label: 'August' },
    { value: 8, label: 'September' },
    { value: 9, label: 'October' },
    { value: 10, label: 'November' },
    { value: 11, label: 'December' }
]
const optionsYear = [
    { value: 2020, label: '2020' },
    { value: 2021, label: '2021' },
    { value: 2022, label: '2022' },
]

function MenuRanking({ children, items = [], onChange = defaultFn, hideOnClick = false }) {
    const [focusMonth, setFocusMonth] = useState(0)
    const [focusYear, setFocusYear] = useState(0)

    useEffect(() => {
        const d = new Date();
        let month = d.getMonth();
        let year = d.getFullYear();
        optionsMonth.map((item) => {
            if (item.value === month) {
                return setFocusMonth(item)
            }
            return null
        })
        optionsYear.map((item) => {
            if (item.value === year) {
                return setFocusYear(item)
            }
            return null
        })
    }, [])

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#0066d5' : 'white',
            padding: '2px 5px',
        }),
        control: () => ({
            width: '100%',
            height: '38px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            display: 'flex',
            boxSizing: 'border-box',
            fontSize: '13.33px',
            background: "#fff",
        }),
        ValueContainer: () => ({
            color: 'black'
        }),
        dropdownIndicator: () => ({
            backgroundColor: 'transparent'
        }),
        menu: (provided, state) => {
            const backgroundColor = 'transparent'
            return { ...provided, backgroundColor }
        },
        singleValue: (provided, state) => {
            const transition = 'opacity 300ms';
            const color = '#727272';
            return { ...provided, transition, color };
        }
    }

    return (
        <Tippy
            interactive={true}
            hideOnClick={hideOnClick}
            delay={[0, 700]}
            placement='bottom'
            render={(attrs) => (
                <div className={cx('menu-ranking-wrapper')} tabIndex='-1' {...attrs}>
                    <div id={cx("tooltip")} className={cx('ranking-tooltip')} role="tooltip">
                        <div id={cx("arrow")} className={cx('ranking-arrow')} data-popper-arrow></div>
                    </div>
                    <PopperWrapper className={cx('menu-ranking-popper')}>
                        <>
                            <div className={cx('menu-ranking-header')}>
                                <Select
                                    className={cx('menu-ranking-header__month')}
                                    styles={customStyles}
                                    options={optionsMonth}
                                    value={focusMonth}
                                    onChange={setFocusMonth}
                                />
                                <Select
                                    className={cx('menu-ranking-header__year')}
                                    styles={customStyles}
                                    options={optionsYear}
                                    value={focusYear}
                                    onChange={setFocusYear}
                                />
                            </div>
                            <div className={cx('menu-ranking-bottom')}>
                                <div className={cx('menu-ranking-title')}>Ranking Breakdown</div>
                                <div className={cx('menu-ranking-items')}>
                                    {items?.map((item, index) => (
                                        <div className={cx('menu-ranking-item')} key={index}>
                                            <div className={cx('menu-ranking-item__label')}>
                                                {item.title}
                                            </div>
                                            <div className={cx('menu-ranking-item__value')}>
                                                {item.value}
                                            </div>
                                        </div>
                                    ))
                                    }
                                </div>
                            </div>
                        </>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}

export default MenuRanking