import Link from 'next/link';
import {tHeaderMenu} from "@/types";

interface HeaderMenuProps {
  headerItems: tHeaderMenu
  differentPositionCName: string
}

const HeaderMenu = ({headerItems, differentPositionCName}: HeaderMenuProps) => {

  const {headerMenu} = headerItems

  return (
    <div className={`${differentPositionCName} header-menu`}>
      <nav>
        <ul className="flex justify-center">
          {headerMenu.map((menuOne) => (
            <li className={`${menuOne.holderCName} mr-[55px] py-[50px] last:mr-0`} key={menuOne.id}>
              <Link href={menuOne.href}>{menuOne.title}</Link>
              {/*{menuOne.submenuCName && !menuOne.megamenuCName && (*/}
              {/*  <ul className={`${menuOne.submenuCName}`}>*/}
              {/*    {menuOne?.headerSubmenu?.map(*/}
              {/*      (submenuOne) => (*/}
              {/*        <li key={submenuOne.id}>*/}
              {/*          <Link href={`${submenuOne.submenuPath}`}>*/}
              {/*            {submenuOne.submenuTitle}*/}
              {/*          </Link>*/}
              {/*        </li>*/}
              {/*      )*/}
              {/*    )}*/}
              {/*  </ul>*/}
              {/*)}*/}
              {/*{menuOne.megamenuCName && !menuOne.submenuCName && (*/}
              {/*  <ul className={`${menuOne.megamenuCName} flex`}>*/}
              {/*    {menuOne?.headerMegamenu?.map(*/}
              {/*      (megamenuOne) => (*/}
              {/*        <li className="basis-[22%] px-[15px]" key={megamenuOne.id}>*/}
              {/*                                  <span className="mb-[20px] block font-medium">*/}
              {/*                                      {megamenuOne.groupName}*/}
              {/*                                  </span>*/}
              {/*          <ul>*/}
              {/*            {megamenuOne?.groupItems?.map(*/}
              {/*              (groupItem) => (*/}
              {/*                <li*/}
              {/*                  className="mb-[10px] last:mb-0"*/}
              {/*                  key={*/}
              {/*                    groupItem.id*/}
              {/*                  }*/}
              {/*                >*/}
              {/*                  <Link*/}
              {/*                    href={`${groupItem.megamenuPath}`}*/}
              {/*                    className="font-normal transition-all hover:text-primary"*/}
              {/*                  >*/}
              {/*                    {*/}
              {/*                      groupItem.megamenuTitle*/}
              {/*                    }*/}
              {/*                  </Link>*/}
              {/*                </li>*/}
              {/*              )*/}
              {/*            )}*/}
              {/*          </ul>*/}
              {/*        </li>*/}
              {/*      )*/}
              {/*    )}*/}
              {/*  </ul>*/}
              {/*)}*/}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default HeaderMenu
