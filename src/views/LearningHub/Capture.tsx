/*
 * Copyright (C) 2012-2017  Online-Go.com
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import * as React from "react";
import {LearningPage} from './LearningPage';
import {_, pgettext, interpolate} from "translate";
import {LearningHubSectionProperties} from './LearningHubSectionProperties';


export class Capture extends React.PureComponent<LearningHubSectionProperties, any>  {
    pages:Array<typeof LearningPage>;
    constructor(props) {
        super(props);

        this.pages = [
            Page1,
            Page2,
            Page3,
            Page4,
            Page5,
        ];
    }

    render() {
        let page = this.props.page || 0;
        page = Math.min(page, this.pages.length);
        page = Math.max(page, 0);
        let P:typeof LearningPage = this.pages[page];
        return <P
            title={pgettext("tutorial section on capturing", "Capture!")}
            npages={this.pages.length}
            curpage={page}
            nextSection={this.props.nextSection}
            />;
    }
}

class Page1 extends LearningPage {
    constructor(props) { super(props); }
    text() {
        return _("Capture the white stone");
    }
    config() {
        return {
            'initial_state': {
                'black': 'd5e6f5',
                'white': 'e5'
            }
        };
    }
    complete() {
        return this.moveNumber() === 1 && this.at("e5") === 0;
    }
    failed() {
        return this.moveNumber() > 0 && !this.complete();
    }
}
class Page2 extends LearningPage {
    constructor(props) {
        super(props);
    }

    text() {
        return _("Capture the group of white stones");
    }
    config() {
        return {
            mode: "puzzle",
            initial_state: {
                'black': 'd7c6c5e6d4e3f5',
                'white': 'd6d5e5e4'
            },
            move_tree: this.makePuzzleMoveTree(
                [
                    "f4"
                ],
                [
                ]
            )
        };
    }

}
class Page3 extends LearningPage {
    constructor(props) {
        super(props);
    }

    text() {
        return _("You can capture on the side too, capture the white stones.");
    }
    config() {
        return {
            mode: "puzzle",
            initial_state: {
                'black': 'a7b6a3b4',
                'white': 'a6a5a4b5'
            },
            move_tree: this.makePuzzleMoveTree(
                [
                    "c5"
                ],
                [
                ]
            )
        };
    }

}
class Page4 extends LearningPage {
    constructor(props) {
        super(props);
    }

    text() {
        return _("Surrounding isn't enough, you have to fill all the space around the stones. Capture the white stones.");
    }
    config() {
        return {
            mode: "puzzle",
            initial_state: {
                'black': 'c6c5c4g6g5g4d7e7f7d3e3f3',
                'white': 'd6d5d4f6f5f4e6e4'
            },
            move_tree: this.makePuzzleMoveTree(
                [
                    "e5"
                ],
                [
                ]
            )
        };
    }

}



class Page5 extends LearningPage {
    constructor(props) {
        super(props);
    }

    text() {
        return _("Capture the white stones before white can form two \"eyes\"");
    }
    config() {
        return {
            mode: "puzzle",
            initial_state: {
                'black': 'a4b4c4d1d2d3',
                'white': 'a2a3b3b1c1'
            },
            move_tree: this.makePuzzleMoveTree(
                [
                    "c2b2c3d4a1"
                ],
                [
                    "c3c2",
                    "b2c2",
                    "d4c2",
                ]
            )
        };
    }

}

class Page9 extends LearningPage {
    constructor(props) {
        super(props);
    }

    text() {
        return _("Capture the two white stones at e3 and e4");
    }
    config() {
        return {
            mode: "puzzle",
            initial_state: {
                'black': 'd4d3e2f2g3e5',
                'white': 'e4e3f5g4'
            },
            move_tree: this.makePuzzleMoveTree(
                [
                    "f4f3f4"
                ],
                [
                    "f3f4"
                ]
            )
        };
    }

}
