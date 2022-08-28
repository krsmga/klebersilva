var getBrowser = function () 
{
    //isChrome
    if (window.navigator.userAgent.indexOf("Chrome") > -1) 
    { 
        return 'chrome';
    }
    else if (window.navigator.userAgent.indexOf("MSIE ") > -1 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
    { 
        return 'msie';
    }
    else if (window.navigator.userAgent.indexOf("Edge/") > -1)
    { 
        return 'edge';
    }
    else if (window.navigator.userAgent.indexOf("Safari") > -1 && window.navigator.userAgent.indexOf('Chrome') == -1)
    { 
        return 'safari';
    }
    else if (window.navigator.userAgent.indexOf("Firefox") > -1)
    { 
        return 'firefox';
    }
    else if (window.navigator.userAgent.indexOf("Edg/") > -1)
    { 
        return 'edge';
    }
}