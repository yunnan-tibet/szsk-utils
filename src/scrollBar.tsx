/**
 * 设置滚动条2s后不动则隐藏
 */
export const globalMonitorScroll = () => {
  const wrapper = document.getElementsByClassName('j-scrollbar')
  const onScroll = (dom: Element) => {
    let timer: any = null;
    return () => {
      dom.classList.add('m-show-scroll');

      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      if (!timer) {
        timer = setTimeout(() => {
          dom.classList.remove('m-show-scroll');

          timer = null;
        }, 2000);
      }
    }
  }

  for (let i = 0; i < wrapper.length; i++) {
    wrapper[i].addEventListener('scroll', onScroll(wrapper[i]))
  }
}