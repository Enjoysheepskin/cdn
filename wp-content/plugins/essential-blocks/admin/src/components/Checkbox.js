import React, { Component } from "react";
import Switch from "rc-switch";
import "../../../assets/css/switch.css";
import SaveButton from "./SaveButton";

const { all_blocks } = EssentialBlocksAdmin;

export default class Checkbox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			blocks: {},
			enabledBlocks: {},
		};
	}

	componentDidMount() {
		let blocks = all_blocks;
		if (Object.keys(blocks).length) {
			let enabledBlocks = { ...this.state.enabledBlocks };

			Object.keys(blocks).map((block) => {
				if (blocks[block].visibility === "true") {
					enabledBlocks[blocks[block].value] = block;
				}
			});

			this.setState({ blocks, enabledBlocks });
		}
	}

	onEnableAllClick = () => {
		let blocks = { ...this.state.blocks };

		Object.keys(blocks).map((block) => (blocks[block].visibility = "true"));
		this.setState({ blocks });
	};

	onDisableAllClick = () => {
		let blocks = { ...this.state.blocks };

		Object.keys(blocks).map(
			(block) => (blocks[block].visibility = "false")
		);
		this.setState({ blocks });
	};

	onChange = (checked, blockName) => {
		let blocks = { ...this.state.blocks };

		Object.keys(blocks).map(
			(block) =>
				blocks[block].value === blockName &&
				(blocks[block].visibility = String(checked))
		);

		this.setState({ blocks });
	};

	render() {
		const { blocks } = this.state;

		return [
			<div className="eb-admin-global-control">
				<div
					className="eb-admin-button eb-admin-button-enable"
					onClick={() => this.onEnableAllClick()}
				>
					Enable All
				</div>
				<div
					className="eb-admin-button eb-admin-button-disable"
					onClick={() => this.onDisableAllClick()}
				>
					Disable All
				</div>
			</div>,

			<div className="eb-admin-checkboxes-wrapper">
				{Object.keys(blocks).map((block, index) => (
					<div key={index} className="eb-admin-checkbox">
						<label
							htmlFor={blocks[block].value}
							className="eb-admin-checkbox-label"
						>
							{blocks[block].label}
							<Switch
								checked={blocks[block].visibility == "true"}
								onChange={(checked) =>
									this.onChange(checked, blocks[block].value)
								}
								defaultChecked={
									blocks[block].visibility == "true"
								}
								disabled={false}
								checkedChildren="ON"
								unCheckedChildren="OFF"
							/>
						</label>
					</div>
				))}
			</div>,
			<SaveButton />,
		];
	}
}
