//icon cần phải css bằng backgroung position
import icon from '~/assets/images/global/icons.png';

const iconStyle = {
    display: 'inline-block',
    overflow: 'hidden',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${icon})`
}

export const NewIcon = () => {
    const style = {
        width: '49px',
        height: '28px',
        backgroundPosition: '-1468px -32px',
        ...iconStyle
    }
    return (
        <i style={style} />
    )
}

export const SearchIcon = () => {
    const style = {
        display: 'inline-block',
        overflow: 'hidden',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${icon})`,
        width: '20px',
        height: '20px',
        backgroundPosition: '-1936px -2px',
    }
    return <i style={style} />
}

export const RankingIcon = () => {
    const style = {
        display: 'inline-block',
        overflow: 'hidden',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${icon})`,
        width: '43px',
        height: '39px',
        backgroundPosition: '-758px -2px',
    }

    return <i style={style} />
}

