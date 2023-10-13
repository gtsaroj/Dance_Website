
document.addEventListener('DOMContentLoaded', () => {
    const toogleDark = document.getElementById('toggleDark');
    toogleDark.addEventListener('onclick', function () {
        if (document.documentElement.classList.includes('dark')) {
            document.documentElement.classList.remove('dark');
        }
        else {
            document.documentElement.classList.add('dark');
        }
    }

    )
})
