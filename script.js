const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Открыть меню'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; navigation.classList.toggle('open', open); menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню'); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
const sport = document.querySelector('#sport');
const hint = document.querySelector('#sport-hint');
function updateHint() { hint.textContent = sport.selectedIndex === 0 ? 'Напиши нам — подберём направление и группу.' : `Твой выбор: ${sport.value}. Укажи это направление в сообщении клубу.`; }
sport.addEventListener('change', updateHint);
document.querySelectorAll('[data-sport]').forEach(card => card.addEventListener('click', () => { sport.value = card.dataset.sport; updateHint(); }));
document.querySelector('#year').textContent = new Date().getFullYear();
