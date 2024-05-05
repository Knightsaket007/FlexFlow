import { useEffect } from "react";
import './style.css';

const Script = () => {
    useEffect(() => {
        function setWidth(element, value) {
            element.style.width = value + 'px';
        }

        function setHeight(element, value) {
            element.style.height = value + 'px';
        }

        function setBorderRadius(element, value) {
            element.style.borderRadius = value + 'px';
        }

        function setFontSize(element, value) {
            element.style.fontSize = value + 'px';
        }

        function setPaddingTop(element, value) {
            element.style.paddingTop = value + 'px';
        }

        function setPaddingRight(element, value) {
            element.style.paddingRight = value + 'px';
        }

        function setPaddingBottom(element, value) {
            element.style.paddingBottom = value + 'px';
        }

        function setPaddingLeft(element, value) {
            element.style.paddingLeft = value + 'px';
        }

        function setMarginTop(element, value) {
            element.style.marginTop = value + 'px';
        }

        function setMarginRight(element, value) {
            element.style.marginRight = value + 'px';
        }

        function setMarginBottom(element, value) {
            element.style.marginBottom = value + 'px';
        }

        function setMarginLeft(element, value) {
            element.style.marginLeft = value + 'px';
        }
        
        function setmargintopBottom(element, value) {
            element.style.marginTop = value + 'px';
            element.style.marginBottom = value + 'px';
        }
        function setmarginleftRight(element, value) {
            element.style.marginLeft = value + 'px';
            element.style.marginRight = value + 'px';
        }

        function setpaddingtopBottom(element, value) {
            element.style.paddingTop = value + 'px';
            element.style.paddingBottom = value + 'px';
        }
        function setpaddingleftRight(element, value) {
            element.style.paddingLeft = value + 'px';
            element.style.paddingRight = value + 'px';
        }

        function setColor(element, value) {
            element.style.color = value;
        }

        function setBackgroundColor(element, value) {
            element.style.backgroundColor = value;
        }

        function setTop(element, value) {
            element.style.top = value + 'px';
        }

        function setRight(element, value) {
            element.style.right = value + 'px';
        }

        function setBottom(element, value) {
            element.style.bottom = value + 'px';
        }

        function setLeft(element, value) {
            element.style.left = value + 'px';
        }

        function setViewportHeight(element, value) {
            element.style.height = value + 'vh';
        }

        function setViewportWidth(element, value) {
            element.style.width = value + 'vw';
        }

        function setZIndex(element, value) {
            element.style.zIndex = value;
        }

        function flexBox(element, value) {
            element.style.display = "flex";
            element.style.flexWrap = "wrap";
            element.style.gap = value + "px";
        }

        // Mapping of class prefixes to corresponding styling functions
        const classMap = {
            'cust-w-': setWidth,
            'cust-h-': setHeight,
            'cust-br-': setBorderRadius,
            'cust-txt-sz-': setFontSize,
            'cust-pd-t-': setPaddingTop,
            'cust-pd-r-': setPaddingRight,
            'cust-pd-b-': setPaddingBottom,
            'cust-pd-l-': setPaddingLeft,
            'cust-pd-tb-': setpaddingtopBottom,
            'cust-pd-lr-': setpaddingleftRight,
            'cust-mg-t-': setMarginTop,
            'cust-mg-r-': setMarginRight,
            'cust-mg-b-': setMarginBottom,
            'cust-mg-l-': setMarginLeft,
            'cust-mg-tb-': setmargintopBottom,
            'cust-mg-lr-': setmarginleftRight,
            'cust-clr-': setColor,
            'cust-bg-': setBackgroundColor,
            'cust-t-': setTop,
            'cust-r-': setRight,
            'cust-b-': setBottom,
            'cust-l-': setLeft,
            'cust-vh-': setViewportHeight,
            'cust-vw-': setViewportWidth,
            'cust-z-ind-': setZIndex,
            'cust-flx-': flexBox,
        };

        function applyCustomStyles() {
            console.log('Applying custom styles...');
            const elements = document.querySelectorAll('[class*="cust-"]');

            elements.forEach(element => {
                const classes = element.className.split(' ');
                classes.forEach(className => {
                    Object.keys(classMap).forEach(prefix => {
                        if (className.startsWith(prefix)) {
                            const value = className.replace(prefix, '');
                            classMap[prefix](element, value);
                        }
                    });
                });
            });
        }

        applyCustomStyles();

        const observer = new MutationObserver(() => {
            applyCustomStyles();
        });
        observer.observe(document.body, { attributes: true, childList: true, subtree: true });

        return () => {
            observer.disconnect();
        };
    }, []);

    return null;
};

export default Script;
