import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    disabled = false,
    rounded = false,
    small = false,
    large = false,
    className,
    leftIcon,
    rightIcon,
    children,
    onClick,
    ...passProps
}) {
    //Biến Comp sẽ lưu tên component mà chúng ta sẽ sử dụng
    let Comp = 'button';

    //Các props cần truyền vào component Button
    const props = {
        onClick,
        ...passProps,
    };

    //Kiểm tra xem nếu disabled = true thì sẽ xóa đi props onClick
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });

        //Không cho nó chuyển trang
        to = undefined;
        href = undefined;
    }

    //Kiểm tra xem nếu có truyền vào to thì sẽ sử dụng component Link
    //Để chuyển hướng trang, còn nếu có truyền vào href thì sẽ sử dụng
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }

    //Kiểm tra xem có class nào được truyền vào không
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        text,
        large,
        disabled,
        rounded,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
