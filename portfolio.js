/*        filters tab    */

const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc=>{ // tc == tab_content
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')
        
        tabs.forEach(t=>{ // t=== tabs
            t.classList.remove('filters-tab-active')
        })
    })
})