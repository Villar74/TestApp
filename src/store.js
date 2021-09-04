import loadingPlugin from '@rematch/loading';
import {init} from '@rematch/core';
import * as models from './models';

/**
 * Store рематча с данными и эффектами, можно добавить постоянное хранилище используя @rematch/persist
 * @type {RematchStore<TModels, TExtraModels>}
 */
export const store = init({
  models,
  plugins: [loadingPlugin()],
});
