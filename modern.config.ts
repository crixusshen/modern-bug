/*
 * @Author: shenzhiwei
 * @Date: 2022-07-25 11:45:48
 * @Company: orientsec.com.cn
 * @Description: 运行时配置
 */
import { defineConfig } from '@modern-js/app-tools';

export default defineConfig({
  server: {
    ssr: true,
    // 这里打开注释会报：
    ssrByEntries: {
      contacts: false,
    },
  },
  output: {
    // 差异化分发
    enableModernMode: true,
    // ua polyfill
    polyfill: 'ua',
  },
  source: {
    designSystem: {
      extend: {
        screens: {
          '2xl': '980px',
        },
      },
    },
  },
});
