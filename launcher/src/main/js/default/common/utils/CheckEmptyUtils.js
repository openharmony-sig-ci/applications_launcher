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

export default {

    /**
     * Check obj is empty.
     *
     * @param {object} obj
     * @return {boolean} true(empty)
     */
    isEmpty(obj) {
        return (typeof obj === 'undefined' || obj == null || obj === '');
    },

    /**
     * Check str is empty.
     *
     * @param {string} str
     * @return {boolean} true(empty)
     */
    checkStrIsEmpty(str) {
        return str.trim().length == 0;
    },

    /**
     * Check array is empty.
     *
     * @param {Array}arr
     * @return {boolean} true(empty)
     */
    isEmptyArr(arr) {
        return arr.length == 0;
    }
}
 