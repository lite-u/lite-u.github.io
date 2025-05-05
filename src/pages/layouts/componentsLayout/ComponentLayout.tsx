import {Outlet, useLocation} from 'react-router'
import {useEffect} from 'react'
import CommonAPI from '../common/CommonAPI.tsx'
import OUTPUT_JSON from '../../../../json/output.json'
import COMPONENT_ROUTE_MAP from './componentData.tsx'
import CommonHead from '../common/CommonHead.tsx'
import CommonFoot from '../common/CommonFoot.tsx'

const ComponentLayout = () => {
  const {pathname} = useLocation()
  const str = location.pathname.split('/')
  const currentPath = str[str.length - 1]
  const COMP_ROUTE = COMPONENT_ROUTE_MAP[currentPath as keyof typeof COMPONENT_ROUTE_MAP]
  console.log(currentPath)
  if (!COMP_ROUTE) return
  // @ts-ignore
  if (!OUTPUT_JSON[COMP_ROUTE.apiNameKey]) return
  if (!COMP_ROUTE) return
  // @ts-ignore
  if (!OUTPUT_JSON[COMP_ROUTE.apiNameKey]) return
  const to = COMP_ROUTE.to
  // @ts-ignore
  const brief = OUTPUT_JSON[COMP_ROUTE.apiNameKey].tags.brief
  // @ts-ignore
  const intro = OUTPUT_JSON[COMP_ROUTE.apiNameKey].tags.intro
  // @ts-ignore
  const codeExample = OUTPUT_JSON[COMP_ROUTE.apiNameKey].tags.example
  // @ts-ignore
  const apiData = OUTPUT_JSON[COMP_ROUTE.apiNameKey].props

  useEffect(() => {

    // console.log(path)
    // document.title = `${path.replace('')} @Lite-u/ui Library`
  }, [pathname])

  return <div>
    <CommonHead to={to} name={COMP_ROUTE.name} brief={brief} intro={intro} example={codeExample}/>

    <Outlet/>

    <CommonAPI apiData={apiData}/>

    <CommonFoot/>
  </div>
}

export default ComponentLayout
