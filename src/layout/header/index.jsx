import React, { Fragment, useState, useEffect, useCallback } from 'react';
import { Row } from 'reactstrap';
import { MENUITEMS } from '../sidebar/menu';
import LeftHeader from './leftbar';
import RightHeader from './rightbar';
import { useSelector } from 'react-redux';
import { DefaultLayout } from '../theme-customizer';

const Header = () => {

    const mainmenu = MENUITEMS;
    const [searchValue, setsearchValue] = useState('');
    const layout_type = useSelector(content => content.Customizer.layout)
    // const layout_version = useSelector(content => content.Customizer.customizer.color.mix_background_layout);
    const defaultLayout = Object.keys(DefaultLayout);

    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            setsearchValue('')
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);

    const handleSearchKeyword = (keyword) => {
        keyword ? addFix() : removeFix()
        const items = [];
        setsearchValue(keyword)
        mainmenu.map(menuItems => {
            menuItems.Items.filter(mItems => {
                if (mItems.title.toLowerCase().includes(keyword) && mItems.type === 'link') {
                    items.push(mItems);
                }
                if (!mItems.children) return false
                mItems?.children?.filter(subItems => {
                    if (subItems.title.toLowerCase().includes(keyword) && subItems.type === 'link') {
                        subItems.icon = mItems.icon
                        items.push(subItems);
                    }
                    if (!subItems.children) return false
                    subItems.children.filter(suSubItems => {
                        if (suSubItems.title.toLowerCase().includes(keyword)) {
                            suSubItems.icon = mItems.icon
                            items.push(suSubItems);
                        }
                        return suSubItems
                    })
                    return subItems
                })
                checkSearchResultEmpty(items)
                setsearchValue(items);
                return mItems
            });
            return menuItems
        });
    }

    const checkSearchResultEmpty = (items) => {

        if (!items.length) {
            document.querySelector(".empty-menu").classList.add('is-open');
        } else {
            document.querySelector(".empty-menu").classList.remove('is-open');
        }
    }

    const addFix = () => {
        document.querySelector(".Typeahead-menu").classList.add('is-open');
        // document.body.classList.add(`${layout_version}`);
        document.body.classList.add(`${layout_type}`);
        document.body.classList.add('offcanvas')
    }

    const removeFix = () => {
        setsearchValue('')
        document.querySelector(".Typeahead-menu").classList.remove('is-open');
        // document.body.classList.add(`${layout_version}`);
        document.body.classList.add(`${layout_type}`);
        document.body.classList.remove('offcanvas')
    }

    return (
        <Fragment>
            <div className="page-header">
                <Row className="header-wrapper m-0">
                    
                    <LeftHeader />
                    <RightHeader />
                </Row>
            </div>
        </Fragment>
    );
}

export default Header;