/* This Header requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Modal from "../Modal";

const navigation = [{ name: "NEW NOTE", href: "#", current: false }];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Header() {
	const [modal, setmodal] = useState(false);
	return (
		<>
			<Disclosure as="nav" className="bg-gray-100 shadow-lg">
				{({ open }) => (
					<>
						<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
							<div className="relative flex items-center justify-between h-16">
								<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
									{/* Mobile menu button*/}
									<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
										<span className="sr-only">Open main menu</span>
										{open ? (
											<XIcon className="block h-6 w-6" aria-hidden="true" />
										) : (
											<MenuIcon className="block h-6 w-6" aria-hidden="true" />
										)}
									</Disclosure.Button>
								</div>
								<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
									<div className="flex-shrink-0 flex items-center">
										<div className="text-blue-900 text-3xl font-semibold">
											VM<span className="text-red-500">Note</span>
										</div>
									</div>
									<div className="hidden sm:block sm:ml-6"></div>
								</div>
								<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
									<button
										onClick={() => {
											setmodal(true);
										}}
										className="bg-transparent text-blue-900 hover:bg-blue-100 font-semibold py-2 px-4 border-2 border-blue-900 rounded">
										NEW NOTE
									</button>
								</div>
							</div>
						</div>

						<Disclosure.Panel className="sm:hidden">
							<div className="px-2 pt-2 pb-3 space-y-1">
								{navigation.map((item) => (
									<Disclosure.Button
										key={item.name}
										as="a"
										href={item.href}
										className={classNames(
											item.current
												? "bg-gray-900 text-white"
												: "text-gray-300 hover:bg-gray-700 hover:text-white",
											"block px-3 py-2 rounded-md text-base font-medium"
										)}
										aria-current={item.current ? "page" : undefined}>
										{item.name}
									</Disclosure.Button>
								))}
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
			{modal && <Modal setmodal={setmodal} modal={modal} />}
		</>
	);
}
