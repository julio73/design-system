/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { Listbox, ListboxList, ListboxItem } from 'ui/components/picklist/flavors/base/index.react.example';
import { Popover } from 'ui/components/popovers/flavors/base/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';
import _ from 'lodash';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Footer = props =>
  <ul>
    <li>
      <button className="slds-button slds-lookup__item-action">
        <SvgIcon className="slds-button__icon slds-button__icon--left" sprite="utility" symbol="add" />
        Favorite this page
      </button>
    </li>
    <li>
      <button className="slds-button slds-lookup__item-action">
        <SvgIcon className="slds-button__icon slds-button__icon--left" sprite="utility" symbol="edit" />
        Edit Favorites
      </button>
    </li>
  </ul>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: '0-items',
    label: '0 items',
    element:
      <Popover
        className="slds-nubbin--top-right"
        bodyClassName="slds-p-vertical--xx-small slds-p-horizontal--none"
        footerClassName="slds-p-horizontal--none"
        footer={ <Footer /> }
      >
        <ListboxList className="slds-dropdown--length-10" role="group" aria-label="My Favorites">
          <ListboxItem role="presentation" headerText="My Favorites" />
          <ListboxItem role="presentation">You can favorite any page!</ListboxItem>
        </ListboxList>
      </Popover>
  },
  {
    id: '1-item',
    label: '1 item',
    element:
      <Popover
        className="slds-nubbin--top-right"
        bodyClassName="slds-p-vertical--xx-small slds-p-horizontal--none"
        footerClassName="slds-p-horizontal--none"
        bodyRole="listbox"
        footer={ <Footer /> }
      >
        <ListboxList className="slds-dropdown--length-10" role="group" aria-label="My Favorites">
          <ListboxItem role="presentation" headerText="My Favorites" />
          <ListboxItem>
            <SvgIcon className="slds-icon slds-icon-standard-account slds-icon--small slds-media__figure" sprite="standard" symbol="account" />
            <div className="slds-media__body">
              <div className="slds-lookup__result-text">Salesforce.com, Inc.</div>
              <span className="slds-lookup__result-meta slds-text-body--small">Account &bull; San Francisco</span>
            </div>
          </ListboxItem>
        </ListboxList>
      </Popover>
  },
  {
    id: 'less-than-10-items',
    label: '< 10 items',
    element:
      <Popover
        className="slds-nubbin--top-right"
        bodyClassName="slds-p-vertical--xx-small slds-p-horizontal--none"
        footerClassName="slds-p-horizontal--none"
        bodyRole="listbox"
        footer={ <Footer /> }
      >
        <ListboxList className="slds-dropdown--length-10" role="group" aria-label="My Favorites">
          <ListboxItem role="presentation" headerText="My Favorites" />
          { _.times(7, i =>
            <ListboxItem>
              <SvgIcon className="slds-icon slds-icon-standard-account slds-icon--small slds-media__figure" sprite="standard" symbol="account" />
              <div className="slds-media__body">
                <div className="slds-lookup__result-text">Salesforce.com, Inc.</div>
                <span className="slds-lookup__result-meta slds-text-body--small">Account &bull; San Francisco</span>
              </div>
            </ListboxItem>
          )}
        </ListboxList>
      </Popover>
  },
  {
    id: '10-plus-items',
    label: '> 10 items',
    element:
      <Popover
        className="slds-nubbin--top-right"
        bodyClassName="slds-p-vertical--xx-small slds-p-horizontal--none"
        footerClassName="slds-p-horizontal--none"
        bodyRole="listbox"
        footer={ <Footer /> }
      >
        <ListboxList className="slds-dropdown--length-10" role="group" aria-label="My Favorites">
          <ListboxItem role="presentation" headerText="My Favorites" />
          { _.times(11, i =>
            <ListboxItem>
              <SvgIcon className="slds-icon slds-icon-standard-account slds-icon--small slds-media__figure" sprite="standard" symbol="account" />
              <div className="slds-media__body">
                <div className="slds-lookup__result-text">Salesforce.com, Inc.</div>
                <span className="slds-lookup__result-meta slds-text-body--small">Account &bull; San Francisco</span>
              </div>
            </ListboxItem>
          )}
        </ListboxList>
      </Popover>
  }
];
