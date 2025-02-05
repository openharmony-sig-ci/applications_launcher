/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import AppModel from './common/model/AppModel.js'
import SettingsModel from './common/model/SettingsModel.js'
import MMIModel from './common/model/MMIModel.js'
import ResourceManager from './common/model/ResourceManager.js'
import AppListInfoCacheManager from './common/cache/AppListInfoCacheManager.js'

export default {
    data:{
        appModel: new AppModel(),
        settingsModel: new SettingsModel(),
        mmiModel: new MMIModel(),
        resourceManager: new ResourceManager(),
        appListInfoCacheManager: new AppListInfoCacheManager(),
        screenHeight: 0,
        screenWidth: 0
    },

    onCreate() {
        console.info("Launcher app Application onCreate");
        this.data.appModel.registerAppListEvent();
    },

    onDestroy() {
        console.info("Launcher app Application onDestroy");
        this.data.resourceManager.clearCache();
        this.data.appListInfoCacheManager.clearCache();
        this.data.appModel.unregisterAppListEvent();
    }
};
